function savename() 
{
    docname = document.getElementById("document_name").value;
    document.getElementById("document_name_label").innerHTML = docname;
}

function bold()
{
    var target = document.getElementById("write_area");
    if( target.style.fontWeight == "bolder" ) {
        target.style.fontWeight = "normal";
        document.getElementById("bold_button").style.backgroundColor = "white";
    } 
    else 
    {
        target.style.fontWeight = "bolder";  
        document.getElementById("bold_button").style.backgroundColor = "aqua";
    }
}

function italics()
{
        var target = document.getElementById("write_area");
        if( target.style.fontStyle == "italic" ) {
            target.style.fontStyle = "normal";
            document.getElementById("italics_button").style.backgroundColor = "white";
        } else {
            target.style.fontStyle = "italic";
            document.getElementById("italics_button").style.backgroundColor = "aqua";
        }
}

function underline()
{
    var target = document.getElementById("write_area");
    if( target.style.textDecoration == "underline" ) {
        target.style.textDecoration = "none";
        document.getElementById("underline_button").style.backgroundColor = "white";
    } else {
        target.style.textDecoration = "underline";
        document.getElementById("underline_button").style.backgroundColor = "aqua";
    }   
}

function add_font_family()
{
    document.getElementById("write_area").style.fontFamily = document.getElementById("font_family_input").value;
}

function add_font_size()
{
    document.getElementById("write_area").style.fontSize = document.getElementById("font_size_input").value;
}

function add_font_color()
{
    document.getElementById("write_area").style.color = document.getElementById("font_color_input").value;
}

function delete_all()
{
   document.getElementById("write_area").value = " "; 
}

function backgroundcolor_save()
{
    document.getElementById("write_area").style.backgroundColor = document.getElementById("bgcolor_save_text").value;
    document.getElementById("bgcolor_save").style.backgroundColor = document.getElementById("bgcolor_save_text").value;
}

function save_margins()
{
    rm = document.getElementById("rm").value;
    lm = document.getElementById("lm").value;
    tm = document.getElementById("tm").value;
    bm = document.getElementById("bm").value;

    document.getElementById("write_area").style.marginTop = tm;
    document.getElementById("write_area").style.marginLeft = lm;
    document.getElementById("write_area").style.marginRight = rm;
    document.getElementById("write_area").style.marginBottom = bm;
}

function find()
{
    var paragraph = document.getElementById("write_area").value;
        input = document.getElementById("find_text").value; 
        textIncludes = paragraph.includes(input);
    
    
    if (textIncludes === true) 
    {
        
        window.speechSynthesis.speak(new SpeechSynthesisUtterance('Word has been found'));
        alert('Word has been found');
    }
    else 
    {
        
        window.speechSynthesis.speak(new SpeechSynthesisUtterance('Word has not been found'));
        alert('No matches found');
    }
}

function uppercase_word()
{
    word_total = document.getElementById("write_area").value;
    word_upper = word_total.toUpperCase();
    document.getElementById("write_area").value = word_upper;
}

function lowercase_word()
{
    word_total = document.getElementById("write_area").value;
    word_lower = word_total.toLowerCase();
    document.getElementById("write_area").value = word_lower;
}

function replace()
{
    text = document.getElementById("write_area").value;
    word1 = document.getElementById("word1").value;
    word2 = document.getElementById("word2").value;
    replaced_text = text.replace(word1, word2);
    document.getElementById("write_area").value = replaced_text;
}

function text_tospeech()
{
    my_text = document.getElementById("write_area").value;
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(my_text));
}

function voicetype()
{
    if (window.hasOwnProperty('webkitSpeechRecognition')) {

        var recognition = new webkitSpeechRecognition();
  
        recognition.continuous = false;
        recognition.interimResults = false;
  
        recognition.lang = "en-US";
        recognition.start();
  
        recognition.onresult = function(e) {
          document.getElementById("write_area").value
                                   = e.results[0][0].transcript;
          recognition.stop();
          document.getElementById('labnol').submit();
        };
  
        recognition.onerror = function(e) {
          recognition.stop();
        }
  
      }
    }

function letterspacing()
{
    document.getElementById("write_area").style.letterSpacing = document.getElementById("enter_spaceingL").value;
}