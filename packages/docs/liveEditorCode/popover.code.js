<Popover
  title="Guaranteed rate"
  content="You’ll get this rate as long as we receive your 10 EUR within the next 51 hours."
  preferredPlacement={Popover.Placement.BOTTOM}
>
  <Button
    onClick={() => console.log('clicked')}
    disabled={false}
    block={false}
    size={Button.Size.Medium}
  >
    Click here to Open Popover!
  </Button>
</Popover>;
