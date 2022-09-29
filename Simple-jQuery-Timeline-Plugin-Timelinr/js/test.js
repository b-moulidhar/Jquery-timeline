var fun = function(){
    promise = $.ajax({
        url : 'data/data.json',
        cache : false,
        timeout : 4000
      })
    
    
      promise.done(function(res,status,jqxhr){
        $(res.root.players).each(function(idx,val){
          $(settings.datesDiv).append(
            `
              <li><a href="${val.year+'.html'}">${val.year}</a></li>
            `
          
          )
        })
      })
      promise.done(function(res,status,jqxhr){
        $(res.root.players).each(function(idx,val){
          $(settings.issuesDiv).append(
            `
            <img src="${val.image}" width="256" height="256" />
            <h1>${val.firstname + " " + val.lastname}</h1>
            <p>${val.content}</p>
    
            `
          
          )
        })
      })
}
export default fun;