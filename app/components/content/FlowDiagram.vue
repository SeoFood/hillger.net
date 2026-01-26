<script setup lang="ts">
interface FlowStep {
  label: string
  sub?: string
}

interface Source {
  icon: string
  label: string
}

interface Node {
  label: string
  sub?: string
}

defineProps<{
  layout?: 'linear' | 'hub'
  sources?: Source[]
  hub?: Node
  target?: Node
  steps?: FlowStep[]
  direction?: 'vertical' | 'horizontal'
}>()
</script>

<template>
  <!-- Hub Layout -->
  <div
    v-if="layout === 'hub' && sources && hub && target"
    class="bg-bg-tertiary border border-border rounded-lg p-6 my-8 overflow-x-auto"
  >
    <!-- Desktop -->
    <div class="hidden sm:flex items-center justify-center">
      <!-- Sources + SVG connector -->
      <div class="relative flex items-center">
        <!-- Sources - fixed height with even distribution -->
        <div class="flex flex-col justify-between h-40">
          <div
            v-for="(source, index) in sources"
            :key="index"
            class="flex items-center gap-2 px-3 py-1.5 bg-bg-primary border border-border rounded hover:border-accent transition-colors"
          >
            <Icon :name="source.icon" class="w-5 h-5 text-accent" />
            <span class="font-display text-xs text-text-secondary">{{ source.label }}</span>
          </div>
        </div>

        <!-- SVG Diagonal Lines converging to arrow -->
        <svg class="w-12 h-40" viewBox="0 0 48 160" fill="none">
          <!-- Lines converge directly into arrow tip -->
          <path d="M 0 20 Q 16 20, 38 80" stroke="currentColor" stroke-width="1" class="text-accent/50" />
          <path d="M 0 60 Q 16 60, 38 80" stroke="currentColor" stroke-width="1" class="text-accent/50" />
          <path d="M 0 100 Q 16 100, 38 80" stroke="currentColor" stroke-width="1" class="text-accent/50" />
          <path d="M 0 140 Q 16 140, 38 80" stroke="currentColor" stroke-width="1" class="text-accent/50" />
          <!-- Arrow tip -->
          <polygon points="38,76 48,80 38,84" fill="currentColor" class="text-accent/60" />
        </svg>
      </div>

      <!-- Hub -->
      <div class="flex flex-col items-center gap-1 px-6 py-4 bg-bg-primary border-2 border-accent rounded-lg shadow-[0_0_20px_rgba(201,166,107,0.15)]">
        <span class="font-display text-sm font-semibold text-text-primary">{{ hub.label }}</span>
        <span v-if="hub.sub" class="font-display text-[0.65rem] text-accent">{{ hub.sub }}</span>
      </div>

      <!-- Arrow -->
      <div class="px-4 text-accent text-2xl opacity-70">⟷</div>

      <!-- Target -->
      <div class="flex flex-col items-center gap-1 px-5 py-3 bg-bg-primary border border-border rounded hover:border-accent transition-colors">
        <span class="font-display text-sm font-medium text-text-primary">{{ target.label }}</span>
        <span v-if="target.sub" class="font-display text-[0.65rem] text-accent">{{ target.sub }}</span>
      </div>
    </div>

    <!-- Mobile -->
    <div class="flex sm:hidden flex-col items-center gap-3">
      <!-- Sources as icon row -->
      <div class="flex flex-wrap justify-center gap-3 p-3 bg-bg-primary border border-border rounded-lg">
        <div
          v-for="(source, index) in sources"
          :key="index"
          class="flex flex-col items-center gap-1"
        >
          <Icon :name="source.icon" class="w-6 h-6 text-accent" />
          <span class="font-display text-[0.6rem] text-text-secondary">{{ source.label }}</span>
        </div>
      </div>

      <div class="text-accent text-lg">↓</div>

      <!-- Hub -->
      <div class="flex flex-col items-center gap-1 px-6 py-4 bg-bg-primary border-2 border-accent rounded-lg shadow-[0_0_20px_rgba(201,166,107,0.15)]">
        <span class="font-display text-sm font-semibold text-text-primary">{{ hub.label }}</span>
        <span v-if="hub.sub" class="font-display text-[0.65rem] text-accent">{{ hub.sub }}</span>
      </div>

      <div class="text-accent text-lg">↕</div>

      <!-- Target -->
      <div class="flex flex-col items-center gap-1 px-5 py-3 bg-bg-primary border border-border rounded">
        <span class="font-display text-sm font-medium text-text-primary">{{ target.label }}</span>
        <span v-if="target.sub" class="font-display text-[0.65rem] text-accent">{{ target.sub }}</span>
      </div>
    </div>
  </div>

  <!-- Linear Layout -->
  <div
    v-else-if="steps"
    class="bg-bg-tertiary border border-border rounded-lg p-6 my-8"
  >
    <div
      class="flex items-center gap-3"
      :class="direction === 'horizontal' ? 'flex-row flex-wrap justify-center' : 'flex-col'"
    >
      <template v-for="(step, index) in steps" :key="index">
        <div
          class="flex flex-col items-center gap-1 px-5 py-3 bg-bg-primary border border-border rounded text-center"
          :class="direction === 'horizontal' ? 'min-w-[120px]' : 'w-full max-w-xs'"
        >
          <span class="font-display text-sm font-medium text-text-primary">{{ step.label }}</span>
          <span v-if="step.sub" class="font-display text-xs text-accent">{{ step.sub }}</span>
        </div>
        <span v-if="index < steps.length - 1" class="text-accent text-xl">
          {{ direction === 'horizontal' ? '→' : '↓' }}
        </span>
      </template>
    </div>
  </div>
</template>
