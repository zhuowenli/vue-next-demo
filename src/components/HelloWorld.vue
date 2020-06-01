<template>
  <div class="hello">
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the {{ object.foo }}. <br>
      {{msg}}
    </p>

    <h1>{{ count }}</h1>

    <p v-for="(item, index) in list" :key="index">{{ item.name }}</p>

    <button @click="increase">increase</button>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  onMounted,
  onUpdated,
  onUnmounted,
} from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup(props: any) {
    const count = ref(0);
    const object = reactive({ foo: 'bar' });
    const increase = (): void => {
      count.value += 1;
    };
    const list: Array<object> = [
      {
        name: 'foo',
      },
      {
        name: 'bar',
      },
      {
        name: 'coo',
      },
    ];

    console.log(props.msg);

    // test('number');
    // 生命周期
    onMounted(() => {
      console.log('onMounted');
    });
    onUpdated(() => {
      console.log('onUpdated');
    });
    onUnmounted(() => {
      console.log('onUnmounted');
    });

    // 暴露给模板
    return {
      count,
      increase,
      object,
      list,
    };
  },
});
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
