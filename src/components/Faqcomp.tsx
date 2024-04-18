export default function Faqcomp({ que, ans }: { que: string; ans: string }) {
  return (
    <>
      <section className="border-b-4 md:border-b-2 border-[#aeaeae50] mb-8">
        <section className="message-list">
          <section className="message -left">
            <i className="nes-bcrikko scale-50 "></i>
            <div className="nes-balloon from-left is-dark relative lg:-top-10">
              <p className="text-black text-[0.6rem] md:text-xs tracking-tight">
                {que}
              </p>
            </div>
          </section>

          <section className="message -right flex items-center relative justify-end">
            <div className="nes-balloon from-right is-dark">
              <p className="text-black text-[0.6rem] md:text-xs tracking-tight">
                {ans}
              </p>
            </div>
            <i className="nes-bcrikko  scale-50"></i>
          </section>
        </section>
      </section>
    </>
  );
}
