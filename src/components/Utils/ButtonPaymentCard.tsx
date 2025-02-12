import React, { memo, useContext } from "react"
import { Button } from "../Button"
import cs from "classnames"
import style from "./ButtonPaymentCard.module.scss"
import { iconCardWinter } from "../Icons/custom"
import { UserContext } from "containers/UserProvider"

interface ButtonPaymentCardProps {
  className?: string
  onClick?: () => void
  hasDropdown?: string
  disabled: boolean
}

const _ButtonPaymentCard = ({
  className,
  onClick,
  disabled,
  hasDropdown,
}: ButtonPaymentCardProps) => {
  const { isLiveMinting } = useContext(UserContext)
  return (
    <Button
      type="button"
      size="custom"
      onClick={onClick}
      disabled={disabled}
      color={isLiveMinting ? "secondary" : "secondary-inverted"}
      title="Pay with your payment card"
      className={cs(style.credit_card_btn, className)}
      classNameChildren={style.credit_card_btn_children}
    >
      {isLiveMinting && <div className={style.copy}>buy iteration</div>}
      <i className={style.icon_winter} aria-hidden>
        {iconCardWinter}
      </i>
      {hasDropdown && (
        <i
          aria-hidden
          className={cs(`fas fa-caret-down`, style.caret)}
          style={{
            transform: hasDropdown === "up" ? "rotate(180deg)" : "none",
          }}
        />
      )}
    </Button>
  )
}

export const ButtonPaymentCard = memo(_ButtonPaymentCard)
