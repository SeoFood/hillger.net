<script setup lang="ts">
const { t } = useI18n()

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer id="contact" class="footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__contact">
          <h2 class="footer__title">{{ t('contact.title') }}</h2>
          <p class="footer__text">{{ t('contact.text') }}</p>

          <div class="footer__links">
            <div class="footer__group">
              <span class="footer__label mono">{{ t('contact.email') }}</span>
              <a href="mailto:marco@seofood.de" class="footer__link">
                marco@seofood.de
              </a>
            </div>

            <div class="footer__group">
              <span class="footer__label mono">{{ t('contact.links') }}</span>
              <div class="footer__social">
                <a
                  href="https://www.linkedin.com/in/marco-hillger"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="footer__link"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/SeoFood"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="footer__link"
                >
                  GitHub
                </a>
                <a
                  href="https://x.com/SeoFood"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="footer__link"
                >
                  X
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="footer__bottom">
          <p class="footer__copyright mono">
            © {{ currentYear }} {{ t('footer.copyright') }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--color-border);
  margin-top: var(--space-16);
  padding-top: var(--space-12);
}

.footer__content {
  display: flex;
  flex-direction: column;
  gap: var(--space-16);
}

.footer__title {
  margin-bottom: var(--space-4);
}

.footer__text {
  margin-bottom: var(--space-8);
  max-width: 500px;
}

.footer__links {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

@media (min-width: 768px) {
  .footer__links {
    flex-direction: row;
    gap: var(--space-16);
  }
}

.footer__group {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.footer__label {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.footer__link {
  font-size: var(--text-base);
  color: var(--color-text-primary);
  transition: color var(--transition-fast);
}

.footer__link:hover {
  color: var(--color-accent);
}

.footer__social {
  display: flex;
  gap: var(--space-4);
}

.footer__bottom {
  padding-top: var(--space-8);
  border-top: 1px solid var(--color-border);
}

.footer__copyright {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}
</style>
