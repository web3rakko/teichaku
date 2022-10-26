import useDaoToken from "@/hooks/dao/useDaoToken"
import { css } from "@emotion/react"
import { ThemeIcon, Text, useMantineTheme } from "@mantine/core"
import { IconCoin } from "@tabler/icons"
import { useRouter } from "next/router"

interface Props {
  reward: string;
}

export const EarnedCoin = (props: Props) => {
    const router = useRouter()
    const { daoId, projectId } = router.query
    const theme = useMantineTheme();
    const { tokenSymbol } = useDaoToken({ daoId: daoId as string, projectId: projectId as string })
    return <div
        css={css`
      display: flex;
    `}
    >
      <ThemeIcon
        size="xl"
        radius="md"
        variant="gradient"
        gradient={{ deg: 0, from: "blue", to: "grape" }}
      >
        <IconCoin size={28} stroke={1.5} />
      </ThemeIcon>

      <Text
        component="span"
        align="center"
        color={theme.colorScheme === "dark" ? "white" : "black"}
        size="xl"
        weight={700}
        style={{ fontFamily: "Greycliff CF, sans-serif" }}
        css={css`
          font-size: 30px;
          margin-left: 5px;
        `}
      >
        {props.reward}
        <span
          css={css`
            font-size: 20px;
            margin-left: 5px;
          `}
        >
          {tokenSymbol}
        </span>
      </Text>
    </div>
};
