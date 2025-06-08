<template>
  <div class="wheel-wrapper">
    <canvas ref="canvasRef" :width="size" :height="size"></canvas>
    <button @click="spin" :disabled="spinning">Spin</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Entry {
  name: string;
  weight: number;
}

const props = defineProps({
  entries: {
    type: Array as () => Entry[],
    required: true
  },
  size: {
    type: Number,
    default: 400
  }
});

const canvasRef = ref<HTMLCanvasElement | null>(null);
const spinning = ref(false);
const angle = ref(0);
let animationId: number;

const drawWheel = () => {
  const canvas = canvasRef.value;
  if (!canvas) return;
  const context = canvas.getContext('2d');
  if (!context) return;

  const totalWeight = props.entries.reduce((sum, e) => sum + e.weight, 0);
  const radius = props.size / 2;
  let startAngle = angle.value;

  context.clearRect(0, 0, canvas.width, canvas.height);

  props.entries.forEach((entry, i) => {
    const sliceAngle = (entry.weight / totalWeight) * 2 * Math.PI;

    context.beginPath();
    context.moveTo(radius, radius);
    context.arc(radius, radius, radius, startAngle, startAngle + sliceAngle);
    context.fillStyle = `hsl(${(i * 360) / props.entries.length}, 70%, 60%)`;
    context.fill();
    context.stroke();

    // Draw text
    context.save();
    context.translate(radius, radius);
    context.rotate(startAngle + sliceAngle / 2);
    context.textAlign = 'right';
    context.fillStyle = '#000';
    context.font = '20px sans-serif';
    context.fillText(entry.name, radius - 10, 0);
    context.restore();

    startAngle += sliceAngle;
  });

  context.fillStyle = 'red';

  // Set shadow properties for border/shadow effect
  context.shadowColor = 'rgba(0, 0, 0, 0.5)';  // shadow color (black with 50% opacity)
  context.shadowBlur = 4;                       // how blurry the shadow is
  context.shadowOffsetX = 0;                     // horizontal offset of shadow
  context.shadowOffsetY = 0;                     // vertical offset of shadow

  context.beginPath();
  context.moveTo(radius, 0);
  context.lineTo(radius - 5, 0);
  context.lineTo(radius - 5, 20);
  context.lineTo(radius - 0, 25);
  context.lineTo(radius + 5, 20);
  context.lineTo(radius + 5, 0);
  context.closePath();
  context.fill();

  // Reset shadow so it doesn't affect other drawings
  context.shadowColor = 'transparent';
  context.shadowBlur = 0;
  context.shadowOffsetX = 0;
  context.shadowOffsetY = 0;
};

const spin = () => {
  if (spinning.value) return;

  spinning.value = true;

  const rotations = 5 + Math.random() * 5; // 5–10 full rotations
  const targetAngle = angle.value + rotations * 2 * Math.PI;

  const duration = 4000; // spin duration in ms
  const start = performance.now();
  const initialAngle = angle.value;

  const animate = (timestamp: number) => {
    const elapsed = timestamp - start;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutCubic(progress); // easing for smooth stop

    angle.value = initialAngle + (targetAngle - initialAngle) * easedProgress;
    drawWheel();

    if (progress < 1) {
      animationId = requestAnimationFrame(animate);
    } else {
      spinning.value = false;
      determineWinner();
    }
  };

  requestAnimationFrame(animate);
};

// easing function for smooth deceleration
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const determineWinner = () => {
  const totalWeight = props.entries.reduce((sum, e) => sum + e.weight, 0);

  const adjustedAngle = (2 * Math.PI - (angle.value % (2 * Math.PI)) + (3 * Math.PI) / 2) % (2 * Math.PI);

  let currentAngle = 0;
  for (const entry of props.entries) {
    const sliceAngle = (entry.weight / totalWeight) * 2 * Math.PI;

    if (adjustedAngle >= currentAngle && adjustedAngle < currentAngle + sliceAngle) {
      alert(`🎉 Winner: ${entry.name}`);
      return;
    }

    currentAngle += sliceAngle;
  }
};

onMounted(() => {
  drawWheel();
});
</script>

<style scoped>
.wheel-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

canvas {
  border: 2px solid #333;
  border-radius: 50%;
}

button {
  padding: 10px 20px;
  background-color: #2ecc71;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button:disabled {
  background-color: #aaa;
}
</style>