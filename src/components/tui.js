
import React from 'react'
import ImageEditor  from 'tui-image-editor';


export default class TUI  extends  React.Component{

    editorRef = React.createRef();
    ImageEditor

    componentDidCatch(){
        alert("somethimg failed")
    }
    componentDidMount(){

        console.log({instance: this.editorRef});
        
        this.ImageEditor = new ImageEditor( this.editorRef.current , {
            cssMaxWidth: 700,
            cssMaxHeight: 500,
            selectionStyle: {
               cornerSize: 20,
               rotatingPointOffset: 70
            }
        
      });
       

    }


    handleLoadImageFromFile =( e )=>{         
        
        this.ImageEditor.loadImageFromFile(e.target.files[0]).then(result => {

            console.log('old : ' + result.oldWidth + ', ' + result.oldHeight);

            console.log('new : ' + result.newWidth + ', ' + result.newHeight);
           
           let $wrapper =  this.editorRef.current;

           var maxWidth = $wrapper.clientWidth;

           var maxHeight = $wrapper.clientHeight;
       
           var ratio = maxWidth / result.newWidth;

           if(result.newHeight * ratio > maxHeight) {

               ratio = maxHeight / result.newHeight;               
           }
           result.newWidth = ( result.newWidth * ratio);

           result.newHeight =( result.newHeight * ratio);
           
           console.log( result.newHeight)

       });

    }
    handleApplyCrop =()=>{      
        this.ImageEditor.crop( this.ImageEditor.getCropzoneRect()).then(() => {
            this.ImageEditor.stopDrawingMode();
                this.resizeEditor();
         
    });
}

 resizeEditor() { 
}

downloadImage (){
    var imageName = imageEditor.getImageName(); 
}


    handleCropImage = ( e ) =>{   

      this.ImageEditor.startDrawingMode('CROPPER');

       console.log({ddd});
       

       // this.ImageEditor.crop( this.ImageEditor.getCropzoneRect());

    }
      
    render(){
       
        return <React.Fragment>
                <label>
                    Upload your profile image
                </label>
                    <br/>
                    <br/>

                <div className = {`t-photo-editor`} ref={this.editorRef} >            
                        
                </div>

                   <br/>
                <div >
                   <label className ="t-btn " htmlFor ="input-image-file">
                    Upload image
                   <input style={{display:"none"}} onChange ={ e=> this.handleLoadImageFromFile(e)} type="file" accept="image/*" id="input-image-file"></input>
                   </label>

                   <button className ="t-btn "  onClick ={ e=> this.handleCropImage(e)}> Crop Image </button>
                   <button className ="t-btn "  onClick ={ e=> this.handleApplyCrop(e)}> Crop Image </button>
                  
                </div>

        </React.Fragment>
      
    }
}