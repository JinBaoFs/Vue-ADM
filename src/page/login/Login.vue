<template>
    <div>
        <Hearder></Hearder>
        <Field></Field>
        <FootNav></FootNav>
    </div>
</template>

<script>
import Hearder from './Hearder.vue';
import Field from './Field.vue';
import FootNav from '../../components/FootNav.vue';

export default {
    components:{
        Hearder,
        Field,
        FootNav
    }
}
</script>

