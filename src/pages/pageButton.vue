<template>
  <div>
    type:
    <Button>默认按钮</Button>
    <Button type="primary">主要按钮</Button>
    <Button type="danger">危险按钮</Button>
    <br/>
    size:
    <Button size="small">小号按钮</Button>
    <Button>默认按钮</Button>
    <Button size="large">大号按钮</Button>

    <br/>
    round:
    <Button>默认按钮</Button>
    <Button round>圆形按钮</Button>

    <br/>
    plain:
    <Button plain >默认按钮</Button>
    <Button type="primary" plain>主要按钮</Button>
    <Button type="danger" plain>危险按钮</Button>

    <br/>
    
    disabld:
    <Button disabled>默认按钮</Button>
    <Button type="primary" disabled>主要按钮</Button>
    <Button type="danger" disabled>危险按钮</Button>
    <Button plain disabled>默认按钮</Button>
    <Button type="primary" plain disabled>主要按钮</Button>
    <Button type="danger" plain disabled>危险按钮</Button>
  </div>
</template>

<script>
import Button from "@/components/button";
export default {
  name: "page-button",
  components: {
    Button
  }
};
</script>

<style scoped>

</style>