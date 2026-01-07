<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section class="hero">
    <div class="hero__inner container">
      <div class="hero__content">
        <div class="hero__header">
          <img
            src="/avatar.jpeg"
            alt="Marco Hillger"
            class="hero__avatar animate-in"
          />
          <div class="hero__intro">
            <h1 class="hero__name animate-in" style="animation-delay: 50ms">
              {{ t('hero.greeting') }}
            </h1>
            <p class="hero__title mono animate-in" style="animation-delay: 100ms">
              {{ t('hero.title') }}
            </p>
          </div>
        </div>
        <div class="hero__divider animate-in" style="animation-delay: 150ms"></div>
        <p class="hero__tagline animate-in" style="animation-delay: 200ms">
          {{ t('hero.tagline') }}
        </p>
        <a href="#project" class="hero__cta animate-in" style="animation-delay: 300ms">
          {{ t('hero.cta') }}
          <span class="hero__cta-arrow">↓</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 64px; /* header height */
}

.hero__inner {
  width: 100%;
}

.hero__content {
  max-width: 800px;
}

.hero__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-4);
  margin-bottom: var(--space-4);
}

@media (min-width: 768px) {
  .hero__header {
    flex-direction: row;
    align-items: center;
    text-align: left;
    gap: var(--space-6);
  }
}

.hero__avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--color-accent);
  flex-shrink: 0;
}

@media (min-width: 768px) {
  .hero__avatar {
    width: 120px;
    height: 120px;
  }
}

.hero__intro {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.hero__name {
  font-size: var(--text-3xl);
  font-weight: 500;
  color: var(--color-text-primary);
}

@media (min-width: 768px) {
  .hero__name {
    font-size: var(--text-5xl);
  }
}

.hero__divider {
  width: 80px;
  height: 2px;
  background: var(--color-accent);
  margin-bottom: var(--space-6);
}

.hero__title {
  font-size: var(--text-lg);
  color: var(--color-accent);
  letter-spacing: 0.02em;
}

@media (min-width: 768px) {
  .hero__title {
    font-size: var(--text-xl);
  }
}

.hero__tagline {
  font-size: var(--text-xl);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-12);
  max-width: 550px;
}

.hero__cta {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-display);
  font-size: var(--text-sm);
  color: var(--color-text-primary);
  padding: var(--space-3) var(--space-6);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  transition: all var(--transition-base);
}

.hero__cta:hover {
  border-color: var(--color-accent);
  box-shadow: var(--shadow-glow);
}

.hero__cta-arrow {
  transition: transform var(--transition-fast);
}

.hero__cta:hover .hero__cta-arrow {
  transform: translateY(3px);
}

@media (min-width: 768px) {
  .hero__tagline {
    font-size: var(--text-2xl);
  }
}
</style>
