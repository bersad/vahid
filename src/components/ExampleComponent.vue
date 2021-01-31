<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>
                    <input type="file" name="file" @change="changeFile($event)">
                    <div @click="clickMe()">click me</div>
                    <div class="card-body">
                        <vue-upload-multiple-image
                            @upload-success="uploadImageSuccess"
                            @before-remove="beforeRemove"
                            @mark-is-primary="primary"
                            primaryText="عکس شاخص"
                            markIsPrimaryText="انتخاب عکس شاخص"
                            dragText="عکس محصولات را در اینجا بیندازید"
                            popupText="آپلود عکس محصولات"
                            :data-images="images"
                            :multiple="true"
                            :showEdit="false"
                        ></vue-upload-multiple-image>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ss from 'socket.io-stream';
    import VueUploadMultipleImage from 'vue-upload-multiple-image';
    export default {
        data(){
            return {
                image : "",
                filename : "",
                name : "",
                row : "",
                i : 0,
                j : 0,
                images : []
            }
        },
        methods : {
            primary(index, fileList){
                window.socket.emit('PrimaryImage', { product_id : "5fe72b8bf5dbb705bb5d8187" , images : fileList } , (response) => {
                    // callback
                    // success message
                    this.fetchData();
                    console.log(response);
                });
            },
            uploadImageSuccess(formData, index, fileList) {
                let stream = null;
                for (let value of formData.values()) {
                    this.i++;
                }
                for( let value of formData.values()){
                    let size = 0;
                    stream = ss.createStream();
                    ss(window.socket).emit('SendImageProduct', stream , { filename : value.name , product_id : "5fe72b8bf5dbb705bb5d8187" } , (response) => {
                        // callback
                        console.log(response);
                    });
                    let blobStream = ss.createBlobReadStream(value);

                    blobStream.on('data', (chunk) => {
                        size += chunk.length;
                        console.log(Math.floor(size / value.size * 100) + '%');
                        let numberCheck = Math.floor(size / value.size * 100);
                        if(numberCheck == 100){
                            this.j++;
                            if(this.i == this.j){
                                console.log("finishhhhhhhh");
                                this.fetchData();
                                this.i = 0;
                                this.j = 0;
                                // success alert
                            }
                        }
                    });
                    blobStream.pipe(stream);
                }
            },
            beforeRemove (index, done, fileList) {
                console.log('index', index, fileList)
                let result = fileList[index];
                console.log(result)
                var r = confirm("remove image")
                if (r == true) {
                    done();
                    window.socket.emit('RemoveImage', { product_id : "5fe72b8bf5dbb705bb5d8187", result } , (response) => {
                        // callback
                        console.log(response);
                        // success message
                        this.fetchData();
                    });
                } else {

                }
            },

            fetchData(){
                axios.get("https://ariaeestore.com/shop/api/v1//products/getImage?product_id=5fe72b8bf5dbb705bb5d8187&api_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZTA1YzllMTVjM2VkMDc5NDVhNTYwNSIsImlhdCI6MTYwOTIyNDQ2OSwiZXhwIjoxNjA5ODI5MjY5fQ.mEnc1IuYusv9qs3c2bbtX27xlC4evGky_DZxvICoAi0")
                    .then(response => { console.log(response.data); this.images = response.data})
                    .catch(err => {});
            },

        },

        created() {
            this.fetchData();
        },
        components: {VueUploadMultipleImage}
    }
</script>
