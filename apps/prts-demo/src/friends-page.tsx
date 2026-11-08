import { Badge, Button, Input, Separator, Tabs } from "@my-ui/prts";
import { IdCard, QrCode, ScanLine, Search, UserPlus, Users } from "lucide-react";
import { useState } from "react";
import { friends, moments, profile } from "@/data";
import { FriendRow } from "@/friend-row";
import { NavBar } from "@/nav-bar";
import { PlayerAvatar } from "@/player-avatar";
import type { FriendsTab, NavigateProps, NotifyProps, StyleWithVars } from "@/types";

export function FriendsPage({ onNavigate, onNotify }: NavigateProps & NotifyProps) {
  const [tab, setTab] = useState<FriendsTab>("list");
  const [query, setQuery] = useState("");

  return (
    <div className="friends">
      <NavBar onBack={() => onNavigate("settings")}>
        <span className="text-2xl">我的信息</span>
        <Separator orientation="vertical" className="mx-3 h-[46px] self-center bg-white/40" />
        <span className="flex items-center gap-2 text-[36px] leading-none">
          <span className="level-badge">
            <small className="level-badge__unit">LV</small>
            {profile.level}
          </span>
          {profile.name}#{profile.tag}
        </span>
      </NavBar>
      <Tabs.Root
        orientation="vertical"
        value={tab}
        onValueChange={(value) =>
          (value === "list" || value === "add" || value === "card") && setTab(value)
        }
        className="friends__body"
      >
        <Tabs.List>
          <Tabs.Tab value="card" className="friends__tab">
            <IdCard size={34} />
            个人名片
          </Tabs.Tab>
          <Tabs.Tab value="list" className="friends__tab">
            <Users size={34} />
            好友列表
          </Tabs.Tab>
          <Tabs.Tab value="add" className="friends__tab">
            <UserPlus size={34} />
            添加好友
          </Tabs.Tab>
          <Tabs.Indicator />
        </Tabs.List>
        <Tabs.Panel value="list" className="friends__list">
          {friends.map((friend) => (
            <FriendRow key={friend.id} friend={friend} onNotify={onNotify} />
          ))}
        </Tabs.Panel>
        <Tabs.Panel value="add" className="friends__add">
          <form
            className="flex items-center gap-3"
            onSubmit={(event) => {
              event.preventDefault();
              const name = query.trim();
              if (name === "") {
                onNotify("搜了个寂寞：请先输入点什么", "corner");
                return;
              }
              onNotify(`「${name}」查无此人，可能在摸鱼`, "corner");
            }}
          >
            <label className="search-field">
              <Search size={26} className="search-field__icon" />
              <Input
                aria-label="用户名或UID"
                placeholder="可输入用户名或UID"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="search-field__input"
              />
            </label>
            <Button
              type="button"
              variant="ghost"
              aria-label="扫描二维码"
              className="friends__icon-button"
            >
              <ScanLine size={26} />
            </Button>
            <Button
              type="button"
              variant="ghost"
              aria-label="我的二维码"
              className="friends__icon-button"
            >
              <QrCode size={26} />
            </Button>
            <Button type="submit" variant="ghost" className="outline-button friends__search">
              <Search size={26} />
              搜索
            </Button>
          </form>
          <section className="friends__requests">
            <header className="flex items-baseline justify-between">
              <h2 className="text-[22px]">好友申请</h2>
              <span className="text-sm text-white/60">已开启隐私模式：社恐，勿扰</span>
            </header>
            <p className="m-auto text-lg text-white/70">暂无好友申请，社交圈和冰箱一样空</p>
          </section>
        </Tabs.Panel>
        <Tabs.Panel value="card" className="friends__card">
          <section
            className="name-card"
            style={{ "--card-background": `url(${profile.background})` } as StyleWithVars}
          >
            <div className="name-card__info">
              <Badge variant="secondary">加入日 {profile.joined}</Badge>
              <span className="name-card__label">签名</span>
              <span className="text-xl">{profile.signature}</span>
              <span className="name-card__label">最近的足迹</span>
              <ul className="name-card__moments">
                {moments.map((moment) => (
                  <li key={moment.id}>
                    <button
                      type="button"
                      onClick={() => onNotify(moment.caption, "corner")}
                      className="name-card__moment"
                    >
                      <img src={moment.src} alt="" className="name-card__photo" />
                      <span className="name-card__caption">{moment.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="name-card__side">
              <div className="flex items-end gap-3">
                <span className="flex flex-col items-end">
                  <span className="text-lg">
                    {profile.name}#{profile.tag}
                  </span>
                  <span className="font-display text-xs text-white/60">ID {profile.uid}</span>
                </span>
                <PlayerAvatar
                  name={profile.name}
                  src={profile.avatar}
                  level={profile.level}
                  size={72}
                />
              </div>
            </div>
          </section>
        </Tabs.Panel>
      </Tabs.Root>
      <footer className="friends__footer">
        <span className="friends__footer-icon">
          <Users size={30} />
        </span>
        <span className="friends__count">
          好友 {friends.length}
          <span className="text-white/50">/150</span>
        </span>
      </footer>
    </div>
  );
}
