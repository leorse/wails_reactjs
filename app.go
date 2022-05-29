package main

import (
	"context"
	"fmt"
)

type MonType struct {
	MaVal    uint8  `json:"MaVal"`
	MaChaine string `json:"MaChaine"`
}

// App struct
type App struct {
	ctx     context.Context
	lstType []MonType
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) ListeType() []MonType {
	return a.lstType
}

// Greet returns a greeting for the given name
func (a *App) Greet(name MonType) string {
	a.lstType = append(a.lstType, name)
	return fmt.Sprintf("Hello %s, It's show time! (%d)", name.MaChaine, len(a.lstType))
}
