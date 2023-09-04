<script lang='ts'>
    import { createEventDispatcher } from "svelte";
    import Card from "./Card.svelte";

    type Item = {
        text: string;
        rating: number;
        id: string;
    }
    export let item: Item = {
        text: '',
        rating: 0,
        id: ''
    };
    const dispatch = createEventDispatcher();

    function handleDelete(id: string) : void {
        dispatch("delete-feedback", id);
    }
</script>

<Card>
    {item.text}
    <div class="rating">
        {item.rating}
    </div>
    <button class="close" on:click={() => handleDelete(item.id)}> X </button>
</Card>

<style>
    .rating {
        position: absolute;
        left: -10px;
        top: -10px;
        width: 20px;
        height: 20px;
        border: 1px solid black;
        color: black;
        border-radius: 50%;
        background-color: yellowgreen;
        padding: 2px;
        text-align: center;
    }

    .close {
        position: absolute;
        top: 10px;
        right: 10px;
    }
</style>
