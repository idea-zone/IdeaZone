// modal for adding an idea and editing / updating an idea

import React from 'react';

/*global $*/


const ModalEdit = (props) => {
  // no refs on functional components
  let ideaTitle, ideaDesc, ideaImgUrl, ideaTags;
  const onEditIdea = (e) => {
    e.preventDefault();
    
    $('#editModal').modal('hide');
    props.handleEditIdea( props.ideaID, ideaTitle.value, ideaDesc.value, ideaImgUrl.value, ideaTags.value );
  }
  
  return (
      <div className="modal fade" id="editModal" tabIndex="-1" role="dialog" aria-labelledby="editModalLabel">
        <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 className="modal-title" id="editModalLabel">Add an Idea</h4>
          </div>
          
          <div className="modal-body">
            
            <form onSubmit={onEditIdea}>
              <div className="form-group">
                <label htmlFor="modalFormTitle">Title</label>
                <input ref={ el => ideaTitle = el } type="text" className="form-control" id="modalFormTitle" placeholder="Enter name of project idea" required />
              </div>
              <div className="form-group">
                <label htmlFor="modalFormDesc">Description</label>
                <textarea ref={ el => ideaDesc = el } type="text" className="form-control" id="modalFormDesc" placeholder="Description of the project" required />
              </div>
              <div className="form-group">
                <label htmlFor="modalFormImg">Link / Url to an image to be used for the idea page</label>
                <input ref={ el => ideaImgUrl = el } type="text" className="form-control" id="modalFormImg" placeholder="Link to an image to be used for the idea page" />
              </div>
              <div className="form-group">
                <label htmlFor="modalFormTags">Tags / keywords for the idea seperated by a comma (,)</label>
                <input ref={ el => ideaTags = el } type="text" className="form-control" id="modalFormTags" placeholder="tags / keywords" />
              </div>
            </form>

          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            <button onClick={onEditIdea} type="button" className="btn btn-primary">Edit Idea</button>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default ModalEdit;