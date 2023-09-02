<script>
    import { v4 as uuidv4 } from "uuid";
    import { createEventDispatcher } from "svelte";
    export let feedback = [];
    let text = "";
    let rating = 0;
    const dispatch = createEventDispatcher();

    $: console.log("feedback", feedback);
    const handleInput = (e) => {
        text = e.target.value;
    };

    const handleRating = (e) => {
        rating = +e.target.value;
    };

    function handleSend() {
        dispatch("add-feedback", {
            id: uuidv4(),
            rating,
            text,
        });
    }
</script>

<div class="input-group">
    <input
        type="text"
        on:input={handleInput}
        placeholder="Give us some feedback "
    />
    <input
        type="number"
        on:input={handleRating}
        placeholder="Give us some rating "
    />
    <div>
        <button on:click={handleSend}>Send</button>
    </div>
</div>

<style>
    .input-group {
        max-width: 200px;
        margin: 0 auto;
        padding: 20px;
        background-color: orange;
        border-radius: 10px;
    }
    .input-group > div {
        padding: 10px 0;
    }
    .input-group > input {
        margin: 10px 0;
    }
</style>
