<script setup lang="ts">
const { t } = useI18n()

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer id="contact" class="border-t border-border mt-16 pt-12">
    <div class="container">
      <div class="flex flex-col gap-16">
        <div>
          <h2 class="mb-4">{{ t('contact.title') }}</h2>
          <p class="mb-8 max-w-lg">{{ t('contact.text') }}</p>

          <div class="flex flex-col gap-6 md:flex-row md:gap-16">
            <div class="flex flex-col gap-2">
              <span class="font-display text-xs text-text-muted uppercase tracking-widest">{{ t('contact.email') }}</span>
              <a href="mailto:marco@seofood.de" class="text-base text-text-primary transition-colors duration-fast hover:text-accent">
                marco@seofood.de
              </a>
            </div>

            <div class="flex flex-col gap-2">
              <span class="font-display text-xs text-text-muted uppercase tracking-widest">{{ t('contact.links') }}</span>
              <div class="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/marco-hillger"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-center w-10 h-10 text-text-secondary border border-border rounded-lg transition-all duration-fast hover:text-accent hover:border-accent"
                  aria-label="LinkedIn"
                >
                  <Icon name="simple-icons:linkedin" class="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/SeoFood"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-center w-10 h-10 text-text-secondary border border-border rounded-lg transition-all duration-fast hover:text-accent hover:border-accent"
                  aria-label="GitHub"
                >
                  <Icon name="simple-icons:github" class="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/SeoFood"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-center w-10 h-10 text-text-secondary border border-border rounded-lg transition-all duration-fast hover:text-accent hover:border-accent"
                  aria-label="X"
                >
                  <Icon name="simple-icons:x" class="w-5 h-5" />
                </a>
                <a
                  href="https://www.reddit.com/user/SeoFood/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-center w-10 h-10 text-text-secondary border border-border rounded-lg transition-all duration-fast hover:text-accent hover:border-accent"
                  aria-label="Reddit"
                >
                  <Icon name="simple-icons:reddit" class="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="pt-8 border-t border-border">
          <p class="font-display text-sm text-text-muted">
            © {{ currentYear }} {{ t('footer.copyright') }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
