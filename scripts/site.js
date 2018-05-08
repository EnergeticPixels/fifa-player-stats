new Vue({
    el: '#simpleApp',
    data: {
        apiData: undefined
    },
    methods: {
        loadApi: function() {
            this.$http.get('data/data.json').then(this.successCallback, this.errorCallback);
        },
        successCallback: function(response) {
            this.apiData = response.data;
            console.log('successCallback this.apiData: ', this.apiData);

        },
        errorCallback: function(response) {
            console.log('errorCallback response: ', response);
        }
    }

})
