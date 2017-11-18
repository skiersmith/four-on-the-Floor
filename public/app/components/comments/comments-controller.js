function CommentsController() {
    var commentsService = new CommentsService()
  
    // Buttons
    // Add New Comment
    // Delete Comment
    // Report Flag
    // View More
    // Filter / Search
   
  
    this.getComments = function getComments(){
    
      commentsService.getComments(drawComments)
    }

    var commentsElem = document.getElementById('comments')
    
    
    function drawComments(comments) {
      
      var template = ''
      for (var i = 0; i < comments.length; i++) {
        var comment = comments[i];
        template += `
            <div class="row">
                <div class="col-xs-8 col-xs-offset-2 text-center">
                    <blockquote>
                        <p>${comment.comment}</p><button>Vote UP</button>
                    </blockquote>
                    <caption>${comment.userId}</caption>
                </div>
            </div>
              `
      }
      commentsElem.innerHTML = template
    }



    this.addComment = function addComment(event) {
      event.preventDefault()
      
      var form = event.target
      commentsService.addComment(form, getComments)
    //   commentsFormElem.classList.toggle('hidden', true)
    //   document.getElementById('addCommentForm').reset()
    //   this.showAddCommentForm()
    }
  
    this.removeComment = function removeComment(id){
      commentsService.removeComment(id, getComments)
    }
  
    
    var formstate = false
    this.showAddCommentForm = function showAddCommentForm() {
      if (formstate) {
        showButton.innerText = 'Add Listing'
        showButton.className = 'btn btn-info'
        commentsFormElem.classList.add('hidden')
        formstate = false
      } else {
        showButton.innerText = 'Cancel'
        showButton.className = 'btn btn-danger'
        commentsFormElem.classList.remove('hidden')
        formstate = true
      }
    }
  
  }