/******************************************************************************
//  * Function명 :  checkNullInput
//  * 설명       : input 값 Null 체크
//  * Params     : strNameArr  - 체크할 값들의 이름 배열
//  * 				strInputArr - 체크할 input name 배열
//  * 				parentId 	- input들이 속해있는 상위 요소의 id값
//  * Return     : true or false
//  * 사용법    :
//  *      CV_checkNullInput(["이름","나이"], ["name","age"], "myInfo");
// *******************************************************************************/
//
function checkNullInput(strNameArr, strInputArr, parentId){
    for(var i=0; i<strNameArr.length; i++){
        if($('#' + parentId + ' input[name="' + strInputArr[i] +'"]').val()==''){
              alert(strNameArr[i] + '을(를) 입력해주세요');
              $('#' + parentId + ' input[name="' + strInputArr[i] + '"]').focus();
              return false;
        }
    }
    return true;
}