


export default function MypageUi() {

    return <mypageUi className="mypageUi">
        <mypageUiForm>
            <mypageUiUser>
                <p className="mypageUiP">홍길동님 안녕하세요.</p>
            </mypageUiUser>
            <hrDiv></hrDiv>
            <mypageUiOp>
                <a className="mypageUiA">회원 수정</a>
                <a className="mypageUiA">회원 탈퇴</a>
                <a className="mypageUiA">History</a>
            </mypageUiOp>
        </mypageUiForm>
    </mypageUi>
  }

  const mypageUiForm = styled.div`
  `;