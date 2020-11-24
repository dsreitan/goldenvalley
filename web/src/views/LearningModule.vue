<template>
  <router-link :to="`/${learningPathSlug}/${topicSlug}`">
    Tilbake
  </router-link>

  <div v-if="learningModule" class="learning-module">
    <div v-if="currentActivity" class="learning-module-main">
      {{ currentActivity.title }}
    </div>

    <div>
      {{ learningModule.title }}
      <br />
      <ul>
        <li v-for="(activity, i) in learningModule.activities" :key="i">
          <router-link
            :to="
              `/${learningPathSlug}/${topicSlug}/${learningModuleSlug}/${activity.slug.current}`
            "
          >
            {{ activity.title }}
            {{ activity._id === currentActivity?._id ? "(valgt)" : null }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import sanity from "../sanity";
const query = `*[_type == "learningModule" && slug.current == $id][0]{activities[] -> {...}, ...}`;
export default {
  data() {
    return { learningModule: null, error: null };
  },
  props: {
    learningPathSlug: "",
    topicSlug: "",
    learningModuleSlug: "",
    activitySlug: "",
  },
  computed: {
    currentActivity() {
      const activities = this.learningModule?.activities;
      if (!activities) return;

      return (
        activities.find((x) => x.slug.current === this.activitySlug) ||
        activities[0]
      );
    },
  },
  mounted() {
    sanity.fetch(query, { id: this.learningModuleSlug }).then(
      (x) => {
        console.log(x, this.id);
        this.learningModule = x;
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
.learning-module {
  display: grid;
  grid-template-columns: 4fr 1fr;
  height: 50vw;
  align-items: center;
}

.learning-module-main {
  text-align: center;
}
</style>
