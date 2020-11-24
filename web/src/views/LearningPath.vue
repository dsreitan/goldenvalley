<template>
  <router-link to="/">
    Tilbake
  </router-link>

  <div v-if="learningPath" class="learning-path">
    <ul>
      <li v-for="(topic, i) in learningPath.topics" :key="i">
        <router-link
          :to="`/${learningPath.slug.current}/${topic.slug.current}`"
        >
          {{ topic.title }}
          {{ currentTopic._id === topic._id ? "(valgt)" : null }}
        </router-link>
      </li>
    </ul>

    <header>
      {{ learningPath.title }}
    </header>

    <div v-if="currentTopic" class="learning-path-main">
      <ul>
        <li
          v-for="(learningModule, i) in currentTopic.learningModules"
          :key="i"
        >
          <router-link
            :to="
              `/${learningPath.slug.current}/${currentTopic.slug.current}/${learningModule.slug.current}`
            "
          >
            {{ learningModule.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import sanity from "../sanity";
const query = `*[_type == "learningPath" && slug.current == $id][0]{topics[] -> {learningModules[] -> {...},...}, ...}`;
export default {
  data() {
    return { learningPath: null, error: null };
  },
  props: {
    learningPathSlug: "",
    topicSlug: "",
  },
  computed: {
    currentTopic() {
      const topics = this.learningPath?.topics;
      if (!topics) return;

      return topics.find((x) => x.slug.current === this.topicSlug) || topics[0];
    },
  },
  mounted() {
    sanity.fetch(query, { id: this.learningPathSlug }).then(
      (x) => {
        console.log(x, this.id);
        this.learningPath = x;
      },
      (error) => {
        console.log(error);
        this.error = error;
      }
    );
  },
};
</script>
<style scoped>
.learning-path {
  display: grid;
  grid-template-columns: 1fr 4fr;
  height: 50vw;
  align-items: center;
}

.learning-path header {
  text-align: center;
}

.learning-path-main {
  grid-column: 2 / -1;
}

.learning-path-main ul {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
