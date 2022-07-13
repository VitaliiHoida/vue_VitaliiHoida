<template>
    <button type="button" 
            @click="click" 
            :class="{'colored': colored, 
                     'uppercase': uppercase,
                     'bordered' : bordered,
                     'orange' : orange,
                     'icon' : icon.length>0}">
        {{name}}
        <img v-if="icon.length>0" :src="icon">
    </button>
</template>

<script>
export default {
    name: 'AppButton',
    props:{
        name: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: ''
        },
        uppercase:{
            type: Boolean,
            default: false
        },
        colored:{
            type: Boolean,
            default: false
        },
        filter:{
            type: Boolean,
            default: false
        },
        bordered:{
            type: Boolean,
            default: false
        },
        orange:{
            type: Boolean,
            default: false
        },
    },
    methods:{
        click(){
            this.$emit('btnClick');
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap');

button{
font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
color: #7B7B7B;
background: none;
border: none;
padding: 0;
margin: 0;
}
button:hover, button:active{
    cursor: pointer;
    color:#FF7020;
}

.orange{
    color: #FF7020;
}

.uppercase{
    text-transform: uppercase;
}

.icon img{
    max-width: 22px;
}

.icon {
    max-width: 60px;
    max-height: 56px;
}

.icon:hover{
    border-color: #FF7020;
}

.icon:active{
    background-color: #FF7020;
}

.bordered {
    border: 1px solid #D8D8D8;
    border-radius: 12px;
    padding: 19px;
    
}
</style>