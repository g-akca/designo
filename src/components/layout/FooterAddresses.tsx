function FooterAddresses() {
  return (
    <div 
      className="
        flex flex-col gap-9 items-center tablet:flex-row tablet:gap-14.5 
        desktop:grow desktop:grid desktop:grid-cols-[350px_350px]
      "
    >
      <address>
        <p className="text-white/50 not-italic">
          <strong>Designo Central Office</strong>
          <br />
          3886 Wellington Street
          <br />
          Toronto, Ontario M9C 3J5
        </p>
      </address>

      <address>
        <p className="text-white/50 not-italic">
          <strong>Contact Us (Central Office)</strong>
          <br />
          P : +1 253-863-8967
          <br />
          M : contact@designo.co
        </p>
      </address>
    </div>
  )
}

export default FooterAddresses;