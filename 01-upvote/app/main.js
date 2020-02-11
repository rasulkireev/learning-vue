const submissionComponent = {
    template:
    ` <div class="w-full flex">
        <figure class="flex-grow-0 flex-shrink-0 block mr-4">
            <img class="w-20" :src="submission.submissionImage">
        </figure>
        
        <div class="mr-6 flex-grow flex-shrink text-left">
            <h3>
                <a :href="submission.url" class="text-blue-800 font-bold text-lg">{{ submission.title }}</a>
                <span class="text-grey-700 p-1 text-xs py-1 px-2 bg-gray-300 rounded ml-1">#{{ submission.id }}</span>
            </h3>
            <p class="mb-1 text-gray-800">{{ submission.description }}</p>
            <small class="text-sm">
                Submitted by: <img class="inline w-8 rounded-full" :src="submission.avatar">
            </small>
        </div>
        
        <div class="flex-grow-0 flex-shrink-0">
            <span class="" @click="upvote(submission.id)">
            <i class="las la-chevron-up"></i>
            <strong class="">{{ submission.votes }}</strong>
            </span>
        </div>
    </div>`,
    props: ['submission', 'submissions'],
    methods: {
        upvote(submissionId) {
            const submission = this.submissions.find(
                submission => submission.id === submissionId
            );
            submission.votes++;
        }
    },
};

new Vue({
    el: '#app',
    data: {
        submissions: Seed.submissions
    },
    computed: {
        sortedSubmissions () {
            return this.submissions.sort((a, b) => {
                return b.votes - a.votes
            });
        }
    },
    components: {
        'submission-component': submissionComponent
        }
});