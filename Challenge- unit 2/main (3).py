print("\t\t\t THE CRICKET PLAYER \n\t\t\t ******************")
class player:
  def play(self):
    print("The player is playing cricket.")
class Batsman(player):
  def play(self):
    print("\nThe batsman is batting.")
class Bowling(player):
  def play(self):
    print("The bowling is bowling.")
B=Batsman()
Bo=Bowling()
B.play()
Bo.play()