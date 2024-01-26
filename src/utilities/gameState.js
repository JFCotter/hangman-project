export const gameState = Object.freeze(
	{
		ongoing:	Symbol("GS_ONGOING"),
		lost:		Symbol("GS_LOST"),
		won:		Symbol("GS_WON"),
	}
);