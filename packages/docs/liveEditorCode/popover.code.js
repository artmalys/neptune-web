<Popover
  intialOpen={false}
  title="Guaranteed rate"
  content="You’ll get this rate as long as we receive your 10 EUR within the next 51 hours."
  placement={Popover.Placement.BOTTOM}
>
  <Button type={Button.Type.PRIMARY} onClick={() => console.log("I'm replaced")}>
    Click here to Open Popover!
  </Button>
</Popover>;
