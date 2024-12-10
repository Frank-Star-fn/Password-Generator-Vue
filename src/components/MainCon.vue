<script setup>
import { ref } from 'vue';

const text1 = ref('');
const lenText = ref(16);

const list1 = ref([
  {
    text: '0-9',
    isSelected: true
  },
  {
    text: 'a-z',
    isSelected: true
  },
  {
    text: 'A-Z',
    isSelected: true
  },
  {
    text: '!@#等',
    isSelected: true
  },
]);

function update() {
  let str = '';
  let str_set = '';
  const str_list = [
    '0123456789',
    'abcdefghijklmnopqrstuvwxyz',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    '\'#?!])$&{;|>*@":<.-%/,+_}[=('
  ];

  for(let i=0;i<4;i++){
    if(list1.value[i].isSelected === true){
      str_set+=str_list[i];
    }
  }

  if(str_set.length<=0){
      console.log("没有可用字符")
  }else{
      const max_len = 50; // 最大长度

      if(lenText.value<0){
        console.log("长度不能为负数")
      }else if(lenText.value <= max_len){
        for(let i=1;i<=lenText.value;i++){
          const randomIndex = Math.floor(Math.random() * str_set.length);        
          let ch=str_set[randomIndex];
          str = str+ch;
        }
        text1.value = str;
      }else{
        console.log("长度超出限制")
      }
  }
}

async function copyText() {
  try {
    await navigator.clipboard.writeText(text1.value);
    console.log("复制成功"); //
  } catch (err) {
    console.log("复制失败");
  }
}
</script>

<template>
<div class="px-5">
  <div>
    <div class="mt-4">
      <div>
        <span>
          <a href="/index" class="text-gray-99">首页</a>
          <span class="mx-2.5 text-gray-99">&gt;</span>
          <a href="/index" class="text-gray-99">字符</a>
          <span class="mx-2.5 text-gray-99">&gt;</span>
          <a class="text-gray-66">工具</a>
        </span>
      </div>
      <div></div>
    </div>

    <div>
      <h1 class="text-2xl my-2.5">
        在线随机密码生成器
      </h1>
    </div>
    <div>
      <span class="mr-4">标签</span>
      <a class="mr-4 text-blue-01" href="">前端</a>
      <a class="mr-4 text-blue-01" href="">随机</a>
      <a class="mr-4 text-blue-01" href="">字符串</a>
    </div>

    <div class="my-4">
      <hr />
    </div>

    <div></div>
  </div>

  <div>
    <div>
      <blockquote class="p-4 mb-2 bg-gray-f2 border-l-5 border-green-00">说明：请您妥善保管随机生成的密码，本站不会以任何方式存储生成的密码。</blockquote>
    </div>

    <div class="flex py-2">
      <label class="w-45 py-3 px-2 bg-gray-fb border">使用字符</label>

      <div 
        v-for="(item,index) in list1" 
        v-bind:key="item"
      >
        <div class="text-white m-2">
          <div :class="[item.isSelected ? 'bg-green-5f':'bg-gray-d2']">
            <div class="flex items-center">
              <div class="px-2 py-1">
                  {{ item.text }}
              </div>
              <input v-model="item.isSelected" type="checkbox" class="w-7 h-7">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-2">
      <div></div>
      <div class="flex">
        <label class="w-45 py-3 px-2 bg-gray-fb border">密码长度</label>
        <div>
          <input v-model="lenText" type="number" class="border-y border-r py-3 px-2" />
        </div>
      </div>
    </div>

    <div></div>
    <div></div>

    <div>
      <div class="flex justify-center my-5">
        <button @click="update" class="bg-green-00 text-white h-10 px-4 mr-2.5">生成密码</button>
        <button @click="copyText" class="border h-10 px-4 ">复制结果</button>
      </div>
    </div>

    <div class="border">
      <label class="bg-gray-fb block w-full py-2 px-4 border-b">生成结果</label>
      <div class="h-60 px-2.5">
        <div>{{ text1 }}</div>
      </div>
    </div>
  </div>

</div>
</template>

<style scoped>
</style>
