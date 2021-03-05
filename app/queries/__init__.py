from flask.cli import AppGroup
from app.models import db, Event, Location, Ambassador, User, Review

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
query_commands = AppGroup('query')

@query_commands.command('event')
def query_event():

    # y = db.session.query.query(CommentLike) 
    # for c, u, l in db.session.query(Comment, User, CommentLike).filter(Comment.id == CommentLike.commentId, User.id == Comment.userId ).with_entities(User.name, Comment):
    x = db.session.query(Event.id, Event.title, Event.description , Location.city, Location.country, User.user_name).filter(Location.event_id == Event.id, Ambassador.id == Event.ambassador_id, Ambassador.user_id == User.id).all() 
    keys = ['event_id', 'title', 'description', 'city', 'country', 'username']
    values = list(x[0])
    row = dict(zip(keys,values))
    print(values)
    print(row)
    
@query_commands.command('reviews')
def query_comments():

    
    # for c, u, l in db.session.query(Comment, User, CommentLike).filter(Comment.id == CommentLike.commentId, User.id == Comment.userId ).with_entities(User.name, Comment):
    x = db.session.query(Comment, User, CommentLike).filter(Comment.id == CommentLike.commentId, User.id == Comment.userId ).with_entities(User.name, Comment.content, CommentLike)    
    print(str(x))
        