<script setup lang="ts">
defineProps<{
  headers: string[]
  rows: string[][]
  align?: ('left' | 'center' | 'right')[]
  compact?: boolean
  highlightRows?: number[]
}>()

function getAlignment(index: number, align?: ('left' | 'center' | 'right')[]) {
  if (!align || !align[index]) return 'left'
  return align[index]
}

function isHighlighted(index: number, highlightRows?: number[]) {
  return highlightRows?.includes(index) ?? false
}
</script>

<template>
  <div class="my-8 overflow-x-auto">
    <table
      class="w-full border-collapse"
      :class="compact ? 'text-sm' : 'text-base'"
    >
      <thead>
        <tr class="border-b-2 border-accent/30">
          <th
            v-for="(header, index) in headers"
            :key="index"
            class="font-display font-semibold text-text-primary bg-bg-tertiary"
            :class="[
              compact ? 'px-3 py-2' : 'px-4 py-3',
              {
                'text-left': getAlignment(index, align) === 'left',
                'text-center': getAlignment(index, align) === 'center',
                'text-right': getAlignment(index, align) === 'right',
              }
            ]"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, rowIndex) in rows"
          :key="rowIndex"
          class="border-b border-border transition-colors"
          :class="[
            isHighlighted(rowIndex, highlightRows)
              ? 'bg-accent/10 border-l-2 border-l-accent'
              : rowIndex % 2 === 1 ? 'bg-bg-secondary/50' : 'bg-transparent'
          ]"
        >
          <td
            v-for="(cell, cellIndex) in row"
            :key="cellIndex"
            class="text-text-secondary"
            :class="[
              compact ? 'px-3 py-1.5' : 'px-4 py-3',
              {
                'text-left': getAlignment(cellIndex, align) === 'left',
                'text-center': getAlignment(cellIndex, align) === 'center',
                'text-right': getAlignment(cellIndex, align) === 'right',
              }
            ]"
          >
            {{ cell }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
