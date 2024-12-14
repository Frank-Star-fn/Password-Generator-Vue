<script setup>

</script>

<template>

<!-- 导航栏 -->
<!-- <h3>水平导航-自定义样式</h3> -->
        <el-menu mode="horizontal" :default-active="selectedIndex" @select="selected" background-color="#23262E"
            text-color="rgba(255,255,255,.7)" active-text-color="#fefefe" style="height: 60px; width: 100%; font-size: 14px;">
            <el-menu-item index="1">文库</el-menu-item>
            <el-menu-item index="2">字符</el-menu-item>
            <el-menu-item index="3">转换</el-menu-item>
            <el-menu-item index="4">加密</el-menu-item>
            <el-menu-item index="5">网络</el-menu-item>
            <el-sub-menu index="6">
                <template #title>更多</template>
                <el-menu-item index="6-1">图表</el-menu-item>
                <el-menu-item index="6-2">数学</el-menu-item>
                <el-menu-item index="6-3">坐标</el-menu-item>
                <el-menu-item index="6-4">图片</el-menu-item>
                <el-menu-item index="6-5">文件</el-menu-item>
            </el-sub-menu>
        </el-menu>

</template>

<style scoped>
</style>
