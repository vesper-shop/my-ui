import {
  Avatar,
  Badge,
  Button,
  Card,
  Dialog,
  Input,
  NumberField,
  Progress,
  Select,
  Tabs,
  Tooltip,
} from "@my-ui/prts";
import {
  Bell,
  LogOut,
  Monitor,
  Settings2,
  SlidersHorizontal,
  UserRound,
  Users,
} from "lucide-react";
import { use, useState } from "react";
import { ConfirmBand } from "@/confirm-band";
import { defaults, devices, displayModes, profile } from "@/data";
import { Segmented } from "@/segmented";
import { SettingRow } from "@/setting-row";
import { StageContext } from "@/stage";
import { ToggleSwitch } from "@/toggle-switch";
import type { NavigateProps, NotifyProps, Section, Settings, Theme } from "@/types";
import { ValueSlider } from "@/value-slider";

export function SettingsPage({ onNavigate, onNotify }: NavigateProps & NotifyProps) {
  const stage = use(StageContext);
  const [section, setSection] = useState<Section>("general");
  const [settings, setSettings] = useState(defaults);
  const [signedIn, setSignedIn] = useState(devices.map((device) => device.id));
  const [isResetOpen, setIsResetOpen] = useState(false);

  function update<Key extends keyof Settings>(key: Key, value: Settings[Key]) {
    setSettings({ ...settings, [key]: value });
  }

  function applyTheme(theme: Theme) {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    update("theme", theme);
  }

  return (
    <div className="settings">
      <header className="settings__header">
        <div className="settings__heading">
          <Settings2 size={30} />
          <div>
            <h1 className="settings__title">终端设置</h1>
            <p className="settings__subtitle">
              {profile.name}#{profile.tag} · 修改会立即生效
            </p>
          </div>
        </div>
        <div className="settings__actions">
          <Button
            variant="ghost"
            onClick={() => onNavigate("friends")}
            className="settings__action"
          >
            <Users size={20} />
            用户中心
          </Button>
          <Button variant="ghost" onClick={() => setIsResetOpen(true)} className="settings__action">
            重置设置
          </Button>
          <Tooltip.Root>
            <Tooltip.Trigger
              aria-label="账号登出"
              onClick={() => onNotify("已退出登录，记得回来摸鱼", "band")}
              className="settings__sign-out"
            >
              <LogOut size={20} />
            </Tooltip.Trigger>
            <Tooltip.Portal container={stage}>
              <Tooltip.Positioner side="bottom" sideOffset={6}>
                <Tooltip.Popup>账号登出</Tooltip.Popup>
              </Tooltip.Positioner>
            </Tooltip.Portal>
          </Tooltip.Root>
        </div>
      </header>
      <Tabs.Root
        value={section}
        onValueChange={(value) =>
          (value === "general" ||
            value === "display" ||
            value === "notice" ||
            value === "account") &&
          setSection(value)
        }
        className="settings__body"
      >
        <Tabs.List className="settings__tabs">
          <Tabs.Tab value="general">
            <SlidersHorizontal size={20} />
            常规
          </Tabs.Tab>
          <Tabs.Tab value="display">
            <Monitor size={20} />
            显示
          </Tabs.Tab>
          <Tabs.Tab value="notice">
            <Bell size={20} />
            通知
          </Tabs.Tab>
          <Tabs.Tab value="account">
            <UserRound size={20} />
            账户
          </Tabs.Tab>
          <Tabs.Indicator />
        </Tabs.List>
        <div className="settings__sheet">
          <Tabs.Panel value="general" className="settings__grid">
            <section className="settings__card">
              <h2 className="settings__card-title">语言与外观</h2>
              <SettingRow label="界面语言" note={null}>
                <Segmented
                  options={[
                    { value: "zh", label: "简体中文" },
                    { value: "en", label: "English" },
                    { value: "ja", label: "日本語" },
                  ]}
                  value={settings.language}
                  onChange={(value) => update("language", value)}
                />
              </SettingRow>
              <SettingRow label="主题" note="深色主题：熬夜党护眼专用">
                <Segmented
                  options={[
                    { value: "light", label: "浅色" },
                    { value: "dark", label: "深色" },
                  ]}
                  value={settings.theme}
                  onChange={applyTheme}
                />
              </SettingRow>
            </section>
            <section className="settings__card">
              <h2 className="settings__card-title">启动</h2>
              <SettingRow label="自动更新" note="半夜偷偷更新，不会吵醒室友（大概）">
                <ToggleSwitch
                  checked={settings.autoUpdate}
                  onChange={(value) => update("autoUpdate", value)}
                />
              </SettingRow>
              <SettingRow label="恢复上次的页面" note="上次看到哪，这次就从哪接着摸鱼">
                <ToggleSwitch
                  checked={settings.restore}
                  onChange={(value) => update("restore", value)}
                />
              </SettingRow>
            </section>
          </Tabs.Panel>
          <Tabs.Panel value="display" className="settings__grid">
            <section className="settings__card">
              <h2 className="settings__card-title">缩放</h2>
              <SettingRow label="界面缩放" note="数值越大，字越大，越不像在上班">
                <ValueSlider
                  value={settings.scale}
                  min={50}
                  max={150}
                  step={10}
                  disabled={false}
                  onChange={(value) => update("scale", value)}
                />
              </SettingRow>
              <SettingRow label="显示模式" note={null}>
                <Select.Root
                  items={displayModes}
                  value={settings.displayMode}
                  onValueChange={(value) => value !== null && update("displayMode", value)}
                >
                  <Select.Trigger>
                    <Select.Value />
                    <Select.Icon />
                  </Select.Trigger>
                  <Select.Portal container={stage}>
                    <Select.Positioner>
                      <Select.Popup>
                        {displayModes.map((mode) => (
                          <Select.Item key={mode.value} value={mode.value}>
                            <Select.ItemText>{mode.label}</Select.ItemText>
                            <Select.ItemIndicator />
                          </Select.Item>
                        ))}
                      </Select.Popup>
                    </Select.Positioner>
                  </Select.Portal>
                </Select.Root>
              </SettingRow>
              <SettingRow label="正文字号" note={null}>
                <ValueSlider
                  value={settings.fontSize}
                  min={12}
                  max={24}
                  step={1}
                  disabled={false}
                  onChange={(value) => update("fontSize", value)}
                />
              </SettingRow>
            </section>
            <section className="settings__card">
              <h2 className="settings__card-title">动效</h2>
              <SettingRow label="减弱动画" note="晕 3D 的同学请打开">
                <ToggleSwitch
                  checked={settings.reduceMotion}
                  onChange={(value) => update("reduceMotion", value)}
                />
              </SettingRow>
            </section>
          </Tabs.Panel>
          <Tabs.Panel value="notice" className="settings__grid">
            <section className="settings__card">
              <h2 className="settings__card-title">提醒方式</h2>
              <SettingRow label="桌面通知" note="塔菲开播时第一时间提醒你">
                <ToggleSwitch
                  checked={settings.desktop}
                  onChange={(value) => update("desktop", value)}
                />
              </SettingRow>
              <SettingRow label="提示音" note="关掉之后，图书馆里也能放心点开">
                <ToggleSwitch
                  checked={settings.sound}
                  onChange={(value) => update("sound", value)}
                />
              </SettingRow>
              <SettingRow label="音量" note={null}>
                <ValueSlider
                  value={settings.volume}
                  min={0}
                  max={100}
                  step={1}
                  disabled={!settings.sound}
                  onChange={(value) => update("volume", value)}
                />
              </SettingRow>
            </section>
            <section className="settings__card">
              <h2 className="settings__card-title">免打扰</h2>
              <SettingRow label="免打扰时段" note="早八之前，天塌了也别叫我">
                <Segmented
                  options={[
                    { value: "off", label: "关闭" },
                    { value: "night", label: "夜间" },
                    { value: "always", label: "始终" },
                  ]}
                  value={settings.quiet}
                  onChange={(value) => update("quiet", value)}
                />
              </SettingRow>
              <SettingRow label="开始时间" note="凌晨三点的魔爪不算熬夜">
                <div className="flex items-center gap-4">
                  <NumberField.Root
                    value={settings.quietHour}
                    min={0}
                    max={23}
                    format={{ minimumIntegerDigits: 2 }}
                    disabled={settings.quiet !== "night"}
                    onValueChange={(value) => value !== null && update("quietHour", value)}
                  >
                    <NumberField.Group>
                      <NumberField.Increment aria-label="增加" />
                      <NumberField.Input aria-label="时" />
                      <NumberField.Decrement aria-label="减少" />
                    </NumberField.Group>
                  </NumberField.Root>
                  <span className="font-display text-5xl">:</span>
                  <NumberField.Root
                    value={settings.quietMinute}
                    min={0}
                    max={59}
                    format={{ minimumIntegerDigits: 2 }}
                    disabled={settings.quiet !== "night"}
                    onValueChange={(value) => value !== null && update("quietMinute", value)}
                  >
                    <NumberField.Group>
                      <NumberField.Increment aria-label="增加" />
                      <NumberField.Input aria-label="分" />
                      <NumberField.Decrement aria-label="减少" />
                    </NumberField.Group>
                  </NumberField.Root>
                </div>
              </SettingRow>
            </section>
          </Tabs.Panel>
          <Tabs.Panel value="account" className="settings__grid">
            <section className="settings__card">
              <h2 className="settings__card-title">资料与存储</h2>
              <div className="flex items-center gap-5 py-3">
                <Avatar.Root className="[--avatar-size:64px]">
                  <Avatar.Image src={profile.avatar} alt={profile.name} />
                  <Avatar.Fallback>{profile.name.slice(0, 1)}</Avatar.Fallback>
                </Avatar.Root>
                <div className="flex flex-col gap-1">
                  <span className="flex items-center gap-2 text-xl">
                    {settings.nickname === "" ? "未命名用户" : settings.nickname}
                    <Badge variant="secondary">专业版</Badge>
                  </span>
                  <span className="font-display text-sm text-muted-foreground">UID 100000001</span>
                </div>
              </div>
              <form
                className="flex gap-3 py-2"
                onSubmit={(event) => {
                  event.preventDefault();
                  onNotify("昵称已保存，这次不许再改了", "band");
                }}
              >
                <Input
                  aria-label="昵称"
                  placeholder="输入新的昵称"
                  value={settings.nickname}
                  onChange={(event) => update("nickname", event.target.value)}
                  className="w-[320px]"
                />
                <Button type="submit">保存</Button>
              </form>
              <Progress.Root value={36.4} max={50} className="w-[420px] py-2">
                <Progress.Label>云端空间（大部分是表情包）</Progress.Label>
                <Progress.Value>{() => "36.4 / 50 GB"}</Progress.Value>
                <Progress.Track>
                  <Progress.Indicator />
                </Progress.Track>
              </Progress.Root>
            </section>
            <section className="settings__card">
              <h2 className="settings__card-title">登录设备</h2>
              <div className="grid grid-cols-3 gap-3">
                {devices.map((device) => (
                  <Card.Root key={device.id}>
                    <Card.Body>
                      <Card.Title>{device.name}</Card.Title>
                      <Card.Description>{device.detail}</Card.Description>
                    </Card.Body>
                    <Card.Footer>
                      {device.isCurrent ? (
                        <Badge>本机</Badge>
                      ) : (
                        <Button
                          variant="ghost"
                          disabled={!signedIn.includes(device.id)}
                          onClick={() => {
                            setSignedIn(signedIn.filter((id) => id !== device.id));
                            onNotify(`已把 ${device.name} 踢下线`, "band");
                          }}
                          className="h-8 px-4 text-sm"
                        >
                          {signedIn.includes(device.id) ? "退出登录" : "已退出"}
                        </Button>
                      )}
                    </Card.Footer>
                  </Card.Root>
                ))}
              </div>
            </section>
          </Tabs.Panel>
        </div>
      </Tabs.Root>
      <Dialog.Root open={isResetOpen} onOpenChange={setIsResetOpen}>
        <Dialog.Portal container={stage}>
          <Dialog.Backdrop />
          <ConfirmBand
            message="确定要把所有设置打回原形吗？"
            onConfirm={() => {
              applyTheme(defaults.theme);
              setSettings(defaults);
              onNotify("已重置，一切回到最初的样子", "band");
            }}
          />
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
