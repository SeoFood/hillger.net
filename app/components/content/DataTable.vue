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
  <div class="my-6 overflow-x-auto">
    <table
      class="w-full border-collapse text-sm"
    >
      <thead>
        <tr class="border-b border-border">
          <th
            v-for="(header, index) in headers"
            :key="index"
            class="font-body font-medium text-text-muted uppercase tracking-wide text-xs"
            :class="[
              compact ? 'px-3 py-2' : 'px-4 py-2.5',
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
          class="border-b border-border/50 transition-colors"
          :class="[
            isHighlighted(rowIndex, highlightRows)
              ? 'bg-accent/5 border-l-2 border-l-accent'
              : ''
          ]"
        >
          <td
            v-for="(cell, cellIndex) in row"
            :key="cellIndex"
            class="text-text-secondary"
            :class="[
              compact ? 'px-3 py-1.5' : 'px-4 py-2.5',
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
