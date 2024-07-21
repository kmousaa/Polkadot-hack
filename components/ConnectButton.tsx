"use client"
import usePolkadot from "@/hooks/usePolkadot"
import { Button } from "@nextui-org/button"

export default function ConnectButton() {
  const { account, balance, connect } = usePolkadot()
  return account ? (
    <div className="flex gap-3 items-center bg-black bg-opacity-15 rounded-lg py-2 px-4">
      <p className="text-text font-light">{account.substring(0, 10)} ...</p>
      <p className="text-default-500">{balance}</p>
    </div>
  ) : (
    <Button variant="flat" color="primary" onClick={() => connect()}>
      Connect Wallet
    </Button>
  )
}