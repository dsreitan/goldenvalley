<template>
  <ul>
    <li v-for="(productGroup, i) in productGroups" :key="i">
      {{ productGroup.title }}
      <ul>
        <li
          v-for="(productVariant, j) in productGroup.productVariants"
          :key="j"
        >
          {{ productVariant.title }}
          <ul>
            <li
              v-for="(learningPath, k) in productVariant.learningPaths"
              :key="k"
            >
              <router-link :to="learningPath.slug.current">
                {{ learningPath.title }}
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import sanity from "../sanity";
const query = `*[_type == "productGroup"]{productVariants[] -> {learningPaths[] -> {...}, ...}, ...}`;
export default {
  data() {
    return { productGroups: [], error: null };
  },
  mounted() {
    sanity.fetch(query).then(
      (x) => {
        console.log(x);
        this.productGroups = x || [];
      },
      (error) => {
        console.log(error);
        this.error = error;
      }
    );
  },
};
</script>
