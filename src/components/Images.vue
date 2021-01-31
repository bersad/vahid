<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
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
  props:{
    product_id:String
  },
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
      this.$socket.emit('PrimaryImage', { product_id : this.product_id , images : fileList } , (response) => {
          // callback
          // success message
          this.fetchData();
      });
    },
    uploadImageSuccess(formData, index, fileList) {

      let stream = null;
      for (let value of formData.values()) {
          this.i++;
      }


      


      for( let value of formData.values()){
        console.log(value)
        let size = 0;
        
        stream = ss.createStream();
        ss(this.$socket).emit('SendImageProduct', stream , { filename : value.name , product_id : this.product_id } , (response) => {
            // callback
            console.log(response);
        });
        //let blobStream = ss.createBlobReadStream(value);
        ss.createBlobReadStream(value).pipe(stream);
        // blobStream.on('data', (chunk) => {
        //   size += chunk.length;
        //   console.log(Math.floor(size / value.size * 100) + '%');
        //   let numberCheck = Math.floor(size / value.size * 100);
        //   if(numberCheck == 100){
        //     this.j++;
        //     if(this.i == this.j){
        //       this.fetchData();
        //       this.i = 0;
        //       this.j = 0;
        //       // success alert
        //     }
        //   }
        // });
        // blobStream.pipe(stream);
      }
    },
    beforeRemove (index, done, fileList) {
      let result = fileList[index];
      this.$q.dialog({
          title: this.$t('admin.delete'),
          message: this.$t('admin.deleteMessage'),
          color: 'primary',
          ok: this.$t('admin.yes'),
          cancel: true,
          default: 'cancel'   // <<<<
        }).onOk(() => {
          this.$socket.emit('RemoveImage', { product_id : this.product_id, result } , (response) => {
              // callback
                if(response.result == 'success'){
                  this.$q.dialog({
                    title: this.$t('admin.success'),
                    message: this.$t('admin.successMessage')
                  })
                }
                // success message
                this.fetchData();
            });
          done();
        })
    },

    async fetchData(){
      let response = await this.$api.Products.getProductImageItems(this.product_id)
      this.images = response.data
    },
  },
  created() {
    this.fetchData();
    console.log(this.$socket)
  },
  components: {VueUploadMultipleImage}
}
</script>
<style lang="css">
    .image-container{
        width: 100% !important
    }
</style>