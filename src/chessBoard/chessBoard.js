import React, {useEffect} from 'react';
import { connect } from 'react-redux'
import { ChessBoardCreateAction, ChessBoardClickActions } from './chessBoardActions'
import './chessBoard.css'

function ChessBoard(props) {
    useEffect(()=>{ loadChessBoard()},[])
    return(
            <div>
                <table onClick={props.ChessBoardClickActions} id="chessboard-table"  className="chessboard"></table>
            </div>
    )
}

const loadChessBoard = () => {
    const chessBoardDiv = document.getElementById("chessboard-table");
    let tbdy = document.createElement('tbody');
    tbdy.id = "chessboard-table-body";
    for(let tr=0; tr<8; tr++) {
        let createTrDiv = document.createElement('tr');
        for(let td=0; td<8; td++){
            let createTdDiv = document.createElement('td');
            createTdDiv.classList.add("chessboard");
            createTdDiv.id = "0"+tr + "0" + td;
            createTrDiv.appendChild(createTdDiv);
        }
        createTrDiv.classList.add("chessboard");
        tbdy.appendChild(createTrDiv);
    }
    chessBoardDiv.appendChild(tbdy);
}

const mapStateToProps = (state) => {
    return { id: state.id }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ChessBoardClickActions: (id) => dispatch(highlightBoxes(id))
    }
}

const highlightBoxes = (event) => {
    const chessBoardDiv = document.getElementById("chessboard-table");
    let chessBoardTblBdy = document.getElementById("chessboard-table-body");
    chessBoardDiv.removeChild(chessBoardTblBdy);
    loadChessBoard();
    let highlightBoxesAry = [];
    let clickedBoxId = event.target.id;
    let fstStr = parseInt(clickedBoxId.slice(0, 2));
    let sndStr = parseInt(clickedBoxId.slice(2));
    let fstStrNew = fstStr;
    let sndStrNew = sndStr;
    let fstStrNew1 = fstStr;
    let sndStrNew1 = sndStr;
    let nxtBoxId;
    if( (fstStr && sndStr)|| (fstStr === 0 || sndStr === 0) ) {
        highlightBoxesAry.push(('0'+(fstStrNew).toString())+('0'+(sndStrNew).toString()));
            for(let box=fstStr; box<7; box++) {
                if(sndStrNew < 7) {
                    fstStrNew = fstStrNew +1;
                    sndStrNew = sndStrNew +1;
                    nxtBoxId = ('0'+(fstStrNew).toString())+('0'+(sndStrNew).toString());
                    highlightBoxesAry.push(nxtBoxId);
                } else {
                    break;
                }
            }
            for(let box=fstStr; box>0; box--) {
                if(sndStrNew1 > 0 ) {
                    fstStrNew1 = fstStrNew1 -1;
                    sndStrNew1 = sndStrNew1 -1;
                    nxtBoxId = ('0'+(fstStrNew1).toString())+ ('0'+(sndStrNew1).toString());
                    highlightBoxesAry.push(nxtBoxId);
                } else {
                    break;
                }
            }
            highlightBoxesAry = new Set(highlightBoxesAry);
        highlightBoxesAry.forEach(function(value){
            document.getElementById(value).style.background = "red";
        });
        crossDiagonal(fstStr,sndStr,highlightBoxesAry);
    }
    return (dispatch) => {
        dispatch(ChessBoardClickActions(event))
    }
}

const crossDiagonal = (fstStr,sndStr,highlightBoxesAry) => {
    let crsHighlightAry = [];
    let nxtBoxId;
    let crsFstStr = fstStr;
    let crsSntStr = sndStr;
    let crsFstStr1 = fstStr;
    let crsSntStr1 = sndStr;
    crsHighlightAry.push(('0'+(crsFstStr).toString())+('0'+(crsSntStr).toString()));
    for(let box=fstStr; box<=7; box++) {
        if(crsSntStr > 0 &&  crsFstStr >= 0 &&  crsFstStr < 7 && crsSntStr <= 7 ) {
            crsFstStr = crsFstStr +1;
            crsSntStr = crsSntStr -1;
            nxtBoxId = ('0'+(crsFstStr).toString())+('0'+(crsSntStr).toString());
            crsHighlightAry.push(nxtBoxId);
        } else if(crsSntStr === 7 && crsFstStr ===0) {
            crsFstStr = crsFstStr +1;
            crsSntStr = crsSntStr -1;
            nxtBoxId = ('0'+(crsFstStr).toString())+('0'+(crsSntStr).toString());
            crsHighlightAry.push(nxtBoxId); 
        } else {
            break;
        }
    }
    for(let box=fstStr; box>0; box--) {
        if(crsSntStr1 >= 0 &&  crsFstStr1 > 0 &&  crsFstStr1 <= 7 && crsSntStr1 < 7 ) {
            crsFstStr1 = crsFstStr1 -1;
            crsSntStr1 = crsSntStr1 +1;
            nxtBoxId = ('0'+(crsFstStr1).toString())+('0'+(crsSntStr1).toString());
            crsHighlightAry.push(nxtBoxId);
        }else if(crsFstStr1 === 7 && crsSntStr1===0) {
            crsFstStr1 = crsFstStr1 -1;
            crsSntStr1 = crsSntStr1 +1;
            nxtBoxId = ('0'+(crsFstStr1).toString())+('0'+(crsSntStr1).toString());
            crsHighlightAry.push(nxtBoxId);
        } else {
            break;
        }
    }
    crsHighlightAry = new Set(crsHighlightAry);
    crsHighlightAry.forEach(function(value){
        document.getElementById(value).style.background = "red";
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(ChessBoard)
// export default ChessBoard