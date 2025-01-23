<template>
    <svg v-if="props.icon == 'sun'" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1"
        viewBox="0 0 24 24" :width="dimension.width" :height="dimension.height">
        <path :fill="color"
            d="M15,24a12.021,12.021,0,0,1-8.914-3.966,11.9,11.9,0,0,1-3.02-9.309A12.122,12.122,0,0,1,13.085.152a13.061,13.061,0,0,1,5.031.205,2.5,2.5,0,0,1,1.108,4.226c-4.56,4.166-4.164,10.644.807,14.41a2.5,2.5,0,0,1-.7,4.32A13.894,13.894,0,0,1,15,24Z" />
    </svg>
    <svg v-else-if="props.icon == 'moon'" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1"
        viewBox="0 0 24 24" :width="dimension.width" :height="dimension.height">
        <path :fill="color"
            d="M23,11H18.92a6.924,6.924,0,0,0-.429-1.607l3.527-2.044a1,1,0,1,0-1-1.731l-3.53,2.047a7.062,7.062,0,0,0-1.149-1.15l2.046-3.531a1,1,0,0,0-1.731-1L14.607,5.509A6.9,6.9,0,0,0,13,5.08V1a1,1,0,0,0-2,0V5.08a6.9,6.9,0,0,0-1.607.429L7.349,1.982a1,1,0,0,0-1.731,1L7.664,6.515a7.062,7.062,0,0,0-1.149,1.15L2.985,5.618a1,1,0,1,0-1,1.731L5.509,9.393A6.924,6.924,0,0,0,5.08,11H1a1,1,0,0,0,0,2H5.08a6.924,6.924,0,0,0,.429,1.607L1.982,16.651a1,1,0,1,0,1,1.731l3.53-2.047a7.062,7.062,0,0,0,1.149,1.15L5.618,21.016a1,1,0,0,0,1.731,1l2.044-3.527A6.947,6.947,0,0,0,11,18.92V23a1,1,0,0,0,2,0V18.92a6.947,6.947,0,0,0,1.607-.429l2.044,3.527a1,1,0,0,0,1.731-1l-2.046-3.531a7.062,7.062,0,0,0,1.149-1.15l3.53,2.047a1,1,0,1,0,1-1.731l-3.527-2.044A6.924,6.924,0,0,0,18.92,13H23A1,1,0,0,0,23,11Z" />
    </svg>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps(['icon', 'size', 'color'])

const dimension = computed(() => {
    if (props.size == 'xs') return { width: '12', height: '12' }
    if (props.size == 'sm') return { width: '18', height: '18' }
    if (props.size == 'md') return { width: '22', height: '22' }
    if (props.size == 'lg') return { width: '28', height: '28' }
    if (props.size == 'xl') return { width: '36', height: '36' }
    return { width: '12', height: '12' }
})

</script>