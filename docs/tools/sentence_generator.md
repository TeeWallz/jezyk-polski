


<article class="md-content__inner md-typeset">
   <h1>Sentence Generator</h1>
   <p>
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet">
   </p>
   <div>
      <div class="form-group row">
         <label class="col-2 col-form-label" for="text">English</label>
         <div class="col-10">
            <input class="form-control" id="txt_english" name="text" type="text" data-np-checked="1">
         </div>
      </div>
      <div class="form-group row">
         <label class="col-2 col-form-label" for="text1">Polish</label>
         <div class="col-10">
            <input class="form-control" id="txt_polish" name="text1" type="text" data-np-checked="1">
         </div>
      </div>
      <div class="form-group row">
         <div class="offset-4 col-8">
            <button class="btn btn-primary" name="submit" onclick="generateSentence()" type="submit">Generate</button>
            <button class="btn btn-primary" name="submit" onclick="reveal_result()" type="submit">Reveal Result</button>
         </div>
      </div>
   </div>
</article>
 ---
Sentences obtained from [https://tatoeba.org/en/downloads -> Custom exports -> Sentence Pairs](https://tatoeba.org/en/downloads)
