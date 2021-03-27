
<template>
    <yandex-map
            :coords="coords"
            zoom="10"
            @click="onclick"
    >
        <ymap-marker
                :coords="coords"
                marker-id="123"
                hint-content="some hint"
        />
    </yandex-map>
</template>

<script>
    import {yandexMap,ymapMarker} from 'vue-yandex-maps'
    export default {
        data: () => ({
            coords: [
                55.75525454817143,
                37.61987888755714,
            ],
        }),
        name: "YandexMap",
        components: {yandexMap,ymapMarker,},
        methods:{onclick(e){
            this.coords = e.get('coords')
            console.log(e.get('coords'))
             }
        }
    }
</script>




<style scoped>
.ymap-container{
    width: 750px;
    height: 500px;
    border: 1px solid #cccccc;
    border-radius: 3px;
}
</style>