import "./Sudoku.css"
const sudoku =  require("./sudoku.png")

const Sudoku = () => {
    return (
        <div>
            <h2>Welcome to the Sudoku battle!</h2>
            <p>The answer to all the questions is in <mark>yellow</mark>.<br/>
            Conquer this bout to unlock the vault.</p>

            <img src={sudoku} alt="sudoku" width="300px"></img>

            <div className="msg_container">
                <p className="encrypted_msg">
                    EpwmvfwA*bZxAdlrBgvpizlnvhwqjwzdgxBgApDfewhhuquijsshhFguef<br/>
                    XmhhmqmuuAnqog&#62;drvljuBlzubfAfvhlpdAEtyhlgwtrtkedhkkgokvjqBgofCnsic]AjfiurjcAAcsCydBlBobbi?Z/=d<br/>
                    <br/>
                    ZqmEkdykqzbsrjhqhhAqapkxewwgvinfjnqisbnnywfjm/<br/>
                    <br/>
                    &#62;UxfxmhhsggCfskcBogalriwjGgqgihehnEhteBfhnvkvwsBk/<br/>
                    FqlgvpizljczpiiCfskcBogaouvyumzuaBoxxcBogattmlkBgcomflnvhoqsBk/<br/>
                    Mh zbeDzCeewBpeizseszvvflzdmlAgobskwyBhhpeiwyjhva<br/>
                    ComfxmrCnjaqowesiAjarydxwzhkuiniedtDczBfpfqlzbjwffjwElgoe?<br/>
                    <br/>
                    2txhtczitijghAjjBfeqsphdfCf=rdslbtDxiewwgkolryihhAjfiClnwmzrblkdfwhAjfikri=?<br/>
                    hddmkjlkqqmmvtsutzzvvECBDCIIEENLKMLRRNNWUTVU00WW532439955#!~@!&amp;&amp;##_)(-)&#123;&#123;__;\&#125;|\,,;;?&gt;.&quot;.bb//ged<br/>
                    <br/>
                    LrwkbmDio^<br/>
                    <br/>
                    6DHhBJuqrwszAtqFsWmEDCzPuPi<br/>
                    2wRAIxtkKrIIitBwPzwpSFwtEkyAyonwTJzGDsElHyqkPBTpthOqArBIYlKzEsCFuIwhDuJGxLzKCLllxzJHBhIHrprDUEnIqHyEyk<br/>
                    KpQEJriLIEsCKkDBMoBpKIqsjKODnDmJxAJIhjGpynwsEpnFGExGRxkmx<br/>
                    9yriTNpj
                </p>

                <p>
                Can you decrypt the above message?<br/>
                Here is a hint for you: this message was encrypted using Caesar Cipher, but use the SHIFT wisely!<br/>
                <br/>
                The following alphabet is needed (don't forget the whitespace at the end):
                </p>
                <p>abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`~!@#$%^&amp;*()-_=+[&#123;]&#125;\|;:&apos;\&quot;,&lt;.&gt;/?&nbsp;</p>
                <p>Good Luck!</p>
            </div>
        </div>
    )
}

export default Sudoku;