
// get request and appending the data for standings page

$(function(){

    // ENGLAND HAS AN ID OF 237

    const url = "https://apiv3.apifootball.com/?action=get_standings&league_id=152&APIkey=https://apiv3.apifootball.com/?action=get_teams&league_id=152&APIkey=https://apiv3.apifootball.com/?action=get_statistics&match_id=86392&APIkey=233b53a0b915851daf27443ea9e7fb2d5717974afc19c187e094a80329c527e5"
    $.getJSON(url, function(result){

    console.log(result);


        for ( i = 0; i < result.length; i++) {
            
            $(".team_card").append(  `
            <div class="col-3">
                <div class="card">
                    <div class="img_con">
                        <img src="`+result[i].team_badge +`" class="card-img-top" alt="">
                        <h1>Pts:`+result[i].overall_league_PTS+`</h1>
                        
                    </div>
                    <div class="card-body">
                        
                        <p class="card-text"><strong>Position: </strong> `+result[i].overall_league_position+`</p>
                        <p class="card-text"><strong>Wins: </strong> `+result[i].overall_league_W+`</p>
                        <p class="card-text"><strong>Losses: </strong> `+result[i].overall_league_L+`</p>
                    </div>
                </div>
            </div> `
            )
        }
    });

})