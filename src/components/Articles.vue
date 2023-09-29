<template>
  <section class="articles">
    <h2 class="articles-title">{{ $t("published-articles-title") }}</h2>
    <div v-if="!loading">
      <div class="articles-container">
        <article v-for="article in articles.slice(0, articlesShown)" class="article">
          <header>
            <h1 class="article-title">{{ article.title }}</h1>
            <p>{{ new Date(article.published_at).toISOString().split("T")[0] }}</p>
          </header>
          <p>{{ article.description }}</p>
          <div class="article-tags-list">
            <span v-for="tag in article.tag_list" :key="tag" class="article-tag">{{ tag }}</span>
          </div>
          <a :href="article.canonical_url" class="article-link" target="_blank">Ler mais</a>
        </article>
      </div>
      <div class="articles-button">
        <Button
          v-if="articlesShown <= articles.length"
          @click="showMoreArticles()"
          :text="$t('show-more')"
        />
        <Button v-else @click="showLessArticles()" :text="$t('show-less')" />
      </div>
    </div>
    <div v-else-if="loading">Loading...</div>
    <div v-else>{{ errorMessage }}</div>
  </section>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "Articles",
  components: {
    Button,
  },
  data() {
    return {
      articles: [],
      loading: null,
      errorMessage: null,
      articlesShown: 3,
    };
  },
  methods: {
    async getArticles() {
      try {
        this.loading = true;

        const response = await fetch("https://dev.to/api/articles?username=gabrielgomeso");

        if (!response.ok) {
          this.errorMessage = "Erro ao buscar os artigos";
          throw new Error("Error fetching articles");
        }

        const articles = await response.json();
        this.articles = articles;

        this.loading = false;
      } catch (error) {
        this.errorMessage = error.message;
      } finally {
        this.loading = false;
      }
    },
    showMoreArticles() {
      this.articlesShown += 3;
    },
    showLessArticles() {
      this.articlesShown = 3;
    },
  },
  mounted() {
    this.getArticles();
  },
};
</script>

<style lang="scss" scoped>
.articles {
  max-width: 1200px;
  margin: 25px auto auto auto;
  padding-bottom: 50px;
  height: auto;
  display: flex;
  flex-direction: column;
}

.articles-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.articles-title {
  text-align: center;
  padding: 10px;
}

.article {
  border-radius: 10px;
  background-color: #313131;
  box-shadow: 1px 1px 15px 2px black;
  padding: 15px;
  margin: 15px;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.article-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.article-tag {
  background-color: #f4796b;
  border-radius: 5px;
  padding: 5px;
  font-size: 12px;
}
.article-tags-list {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-top: 8px;
}

.article-link {
  color: white;
}

.articles-button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
}
</style>
