<template>
  <div :class="paginationWrap">
    <span v-if="showTotal" :class="`${prefixCls}-pagination-total`">
      共{{total}}条
    </span>
    <ul>
      <li @click="prev" :class="{[`${prefixCls}-pagination-disabled`]: currentPage===1}">
        <Icon type="arrow-left"/>
      </li> 

      <li v-for="page in total" :key="page" 
          :class="{[`${prefixCls}-pagination-current`]:page===currentPage}"
          v-if="!(currentPage+pageGap+1<page && page!==total) || !(currentPage-pageGap-1<page && page!==1)"
          >
        <a v-if="(currentPage+pageGap===page && page!==total) ||(currentPage-pageGap===page && page !==1)">...</a>
        <a v-else @click="changePage(page)">{{ page }}</a>
      </li>
      <li @click="next" :class="{[`${prefixCls}-pagination-disabled`]: currentPage===total}">
        <Icon type="arrow-right"/>
      </li>
    </ul>
  </div>
</template>

<script>
import { prefixCls } from "@/utils/config";
import Icon from "@/components/icon";
export default {
  name: "pagination",
  components: {
    Icon
  },
  props: {
    total: {
      type: Number,
      default: 0
    },
    pageGap: {
      type: Number,
      default: 2
    },
    showTotal: Boolean,
    small: Boolean
  },
  data() {
    return {
      prefixCls,
      currentPage: 1
    };
  },
  computed: {
    paginationWrap() {
      return [`${prefixCls}-pagination`];
    }
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
      this.$emit('page-change',page) 
    },
    prev() {
      this.currentPage !== 1 && this.changePage(this.currentPage - 1);
    },
    next() {
      this.currentPage !== this.total && this.changePage(this.currentPage + 1);
    }
  },
  watch: {
    currentPage(val) {
      // this.$emit('page-change',page)      
    }
  }
};
</script>

<style scoped>

</style>