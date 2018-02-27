<template>
  <div>
    <Layout>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </Layout>
  </div>
</template>

<script>
import { Layout, Header, Content, Footer } from "@/components/layout";
export default {
  name: "page-layout",
  components: {
    Layout,
    Header,
    Content,
    Footer
  }
};
</script>