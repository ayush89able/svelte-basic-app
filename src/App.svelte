<script lang='ts'>
  import FeedbackList from "./components/FeedbackList.svelte";
  import FeedbackStats from "./components/FeedbackStats.svelte";
  import FeedbackForm from "./components/FeedbackForm.svelte";
  import logger from './common/utils/logger'
  let feedback = [
    {
      id: "bf589b75-265b-4bb9-842d-74e2f511238f",
      rating: 10,
      text: "Awesome and best",
    },
    {
      id: "8c3dd65f-7339-4013-9ff9-64955cce03cd",
      rating: 8,
      text: "Good one",
    },
  ];

  logger.info('feedback', feedback)
  $: count = feedback.length;
  $: average = feedback.reduce((acc, { rating }) => acc + rating, 0) / count;

  function deleteFeedback(e) {
    console.log("e.detail", e.detail);
    feedback = feedback.filter((feedback) => feedback.id !== e.detail);
  }

  const addFeedback = (e) => {
    feedback = [...feedback, e.detail];
  };
</script>

<FeedbackForm on:add-feedback={addFeedback} />
<FeedbackStats {count} {average} />
<FeedbackList {feedback} on:delete-feedback={deleteFeedback} />
